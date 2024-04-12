"use client";
import { useEffect, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import { publicClient, walletClient } from "@/utils/config";
import ABI from "@/contract/ABI/abi.json";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

interface Proposal {
  contributors: string[];
  creator: string;
  description: string;
  id: bigint;
  imageLink: string;
  isActive: boolean;
  title: string;
  totalFunds: bigint;
}

export const Projects = () => {
  const contractAddress = "0xef7db5407d2f2a36e36ff28d336b136f43b8c946";

  const { address, isConnected } = useAccount();

  const [shoeName, setShoeName] = useState<string>();
  const [shoeDesc, setShoeDesc] = useState<string>();
  const [shoeImg, setShoeImg] = useState<string>();
  const [proposals, setProposals] = useState<Proposal[]>([]);

  const progressCallback = (progressData: any) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFile = async (file: any) => {
    const output = await lighthouse.upload(
      file,
      "e03996c9.c654259790704836b3f2fa4117ee2681",
      false,
      null,
      progressCallback,
    );
    setShoeImg(`https://gateway.lighthouse.storage/ipfs/${output.data.Hash}`);
    console.log("File Status:", output);
    console.log(
      "Visit at https://gateway.lighthouse.storage/ipfs/" + output.data.Hash,
    );
  };

  const contribute = () => {
    console.log("contributed");
  };

  const listSneaker = async () => {
    if (!isConnected && !address) {
      toast.error("Please connect wallet first!");
      return;
    }
    if (!shoeName || !shoeDesc || !shoeImg) {
      toast.error("Please fill all the fields");
      return;
    }
    const { request } = await publicClient.simulateContract({
      address: contractAddress,
      abi: ABI,
      functionName: "createShoeProposal",
      account: address,
      args: [shoeName, shoeDesc, shoeImg],
    });
    await walletClient.writeContract(request);
  };

  const getAllProposalsIds = async (): Promise<bigint[]> => {
    const data: bigint[] = await publicClient.readContract({
      address: contractAddress,
      abi: ABI,
      functionName: "getAllProposalIds",
    });
    return data;
  };

  const getProposalDetails = async (id: bigint): Promise<Proposal> => {
    const data: Proposal = await publicClient.readContract({
      address: contractAddress,
      abi: ABI,
      functionName: "getProposal",
      args: [id],
    });
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const proposalIds = await getAllProposalsIds();
      const proposalsDetails = await Promise.all(
        proposalIds.map(async (id) => await getProposalDetails(id)),
      );
      setProposals(proposalsDetails);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto mb-10">
        <div className="grid grid-cols-4 gap-4">
          {proposals.map((proposal) => (
            <div key={proposal.id} className="card  bg-base-100 shadow-xl">
              <figure style={{ height: "300px" }}>
                {" "}
                {/* Adjust the height as needed */}
                <img
                  src={proposal.imageLink}
                  alt="Shoes"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {proposal.title}
                  {proposal.isActive ? (
                    <div className="badge badge-secondary">Active</div>
                  ) : (
                    <div className="badge badge-ghost">Expired</div>
                  )}
                </h2>
                <p>{proposal.description}</p>
                <button
                  onClick={contribute}
                  className="btn bg-black text-white hover:bg-[#41ff54] hover:text-black"
                >
                  Contribute
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Create Shoe Design Proposal</h3>
          <div>
            <p className="my-2">Shoe Image</p>
            <input
              onChange={(e) => uploadFile(e.target.files)}
              type="file"
              className="file-input w-full"
            />
          </div>
          <div>
            <p className="my-2">Shoe Title</p>
            <input
              onChange={(e) => setShoeName(e.target.value)}
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <p className="my-2">Shoe Description</p>
            <input
              onChange={(e) => setShoeDesc(e.target.value)}
              type="text"
              placeholder="Description"
              className="input input-bordered w-full"
            />{" "}
          </div>
          <button onClick={listSneaker} className="btn my-6 bg-[#41ff54]">
            Post Proposal
          </button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};
