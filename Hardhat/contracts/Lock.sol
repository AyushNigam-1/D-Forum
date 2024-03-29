// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

struct user{
    string uid;
    address userAdd;
}
struct msg {
    string uid;
    string msg;
    string[] votes;
    bool status;
    string room;
    string type ;
}
struct room {
    string uid;
    string name ;
    string owner;
    string[] subRoomsUid
}
struct subRoom {
    string uid;
    string name;
    string [] msgs ;
    string [] owners ;
}
contract Lock {
 room[] allRooms;
 msg[] allMsgs;
user[] allUsers;
 
 function addUser(user memory usr) public  returns(bool){
    allUsers.push(user(usr.uid , usr.add));
 }
 function addMsg(user memory mesg) public  returns(bool){
    allUsers.push(user(mesg.uid , mesg.msg));
 }
 function addRoom(room memory rm) public  returns(bool){
    allRooms.push(room(rm.uid , rm.name , rm.owner,new string[0]));
    return true
 }
 function addSubRoom(room memory subRm) public  returns(bool){
    allRooms.push(subRoom(subRm.uid , subRm.name , subRm.owner,new string[0]));
    return true
 }
 function vote(string msgUid , string voterUid){
for (uint i =0 ; i<allmsgs.lenght; i ++){
    if(allmsgs[i].msgUid == msgUid ){
        allmsgs[i].votes.push(voterUid)
        break;
    }
}
 }
 function updateStatus(bool sta ,string msgUid){
    for (uint i =0 ; i<allmsgs.lenght; i ++){
    if(allmsgs[i].msgUid == msgUid ){
    allmsgs[i].status = sta;
    break;
    }
}
 }
}
