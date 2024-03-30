// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

struct User {
    string uid;
    address userAdd;
}

struct Message {
    string uid;
    string msg;
    string[] votes;
    bool status;
    string room;
    string visibility;
}

struct Room {
    string uid;
    string name;
    string owner;
    string[] subRoomsUid;
}

struct SubRoom {
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
                false,
                mesg.room,
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
            SubRoom(subRm.uid, subRm.name, new string[](0), new string[](0))
        );
    }

    function vote(string calldata msgUid, string calldata voterUid) public {
        for (uint i = 0; i < allMsgs.length; i++) {
            if (keccak256(bytes(allMsgs[i].uid)) == keccak256(bytes(msgUid))) {
                allMsgs[i].votes.push(voterUid);
                break;
            }
        }
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
