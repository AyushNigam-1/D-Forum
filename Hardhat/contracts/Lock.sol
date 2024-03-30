// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

struct User {
    string uid;
    address userAdd;
}

struct Message {
    string uid;
    string msg;
    string[] upVotes;
    string[] downVotes;
    bool status;
    string roomId;
    string visibility;
}

struct Room {
    string uid;
    string name;
    string owner;
    string[] subRoomsUid;
}

struct SubRoom {
    string roomId;
    string uid;
    string name;
    string[] msgs;
    string[] owners;
}

contract Lock {
    Room[] allRooms;
    Message[] allMsgs;
    User[] allUsers;
    SubRoom[] subRooms;

    function addUser(User calldata usr) public {
        allUsers.push(User(usr.uid, usr.userAdd));
    }

    function addMsg(Message calldata mesg) public {
        allMsgs.push(
            Message(
                mesg.uid,
                mesg.msg,
                new string[](0), // Initialize empty string array
                new string[](0), // Initialize empty string array
                false,
                mesg.roomId,
                mesg.visibility
            )
        );
    }

    function addRoom(Room calldata rm) public {
        allRooms.push(
            Room(
                rm.uid,
                rm.name,
                rm.owner,
                new string[](0) // Initialize empty string array
            )
        );
    }

    function addSubRoom(SubRoom calldata subRm) public {
        subRooms.push(
            SubRoom(
                subRm.roomId,
                subRm.uid,
                subRm.name,
                new string[](0),
                new string[](0)
            )
        );
    }

    function getRooms() public view returns (Room[] memory) {
        return allRooms;
    }

    function getSubRooms(
        string calldata roomId
    ) public view returns (SubRoom[] memory) {
        SubRoom[] memory subRms = new SubRoom[](subRooms.length); // Initialize with correct size
        uint subRmCount = 0;

        for (uint i = 0; i < subRooms.length; i++) {
            if (keccak256(bytes(subRooms[i].uid)) == keccak256(bytes(roomId))) {
                subRms[subRmCount] = subRooms[i]; // Assign directly to index
                subRmCount++;
            }
        }

        return subRms;
    }
    function getAllMsgs(
        string calldata roomId
    ) public view returns (Message[] memory) {
        Message[] memory allMsg = new Message[](allMsgs.length); // Initialize with correct size
        for (uint i = 0; i < allMsgs.length; i++) {
            if (keccak256(bytes(allMsgs[i].uid)) == keccak256(bytes(roomId))) {
                allMsg[i] = allMsgs[i]; // Assign directly to index
            }
        }

        return allMsg;
    }

    function upVote(
        string calldata msgUid,
        string calldata voterUid
    ) public returns (uint) {
        uint total;
        for (uint i = 0; i < allMsgs.length; i++) {
            if (keccak256(bytes(allMsgs[i].uid)) == keccak256(bytes(msgUid))) {
                allMsgs[i].upVotes.push(voterUid);
                total = allMsgs[i].upVotes.length;

                break;
            }
        }
        return total;
    }
    function downVote(
        string calldata msgUid,
        string calldata voterUid
    ) public returns (uint) {
        uint total;
        for (uint i = 0; i < allMsgs.length; i++) {
            if (keccak256(bytes(allMsgs[i].uid)) == keccak256(bytes(msgUid))) {
                allMsgs[i].downVotes.push(voterUid);
                total = allMsgs[i].downVotes.length;
                break;
            }
        }
        return total;
    }

    function updateStatus(bool sta, string calldata msgUid) public {
        for (uint i = 0; i < allMsgs.length; i++) {
            if (keccak256(bytes(allMsgs[i].uid)) == keccak256(bytes(msgUid))) {
                allMsgs[i].status = sta;
                break;
            }
        }
    }
}
