import React, {useState} from "react";
 
function TableItem(props) {
    return (<tr><td>{props.member.name}</td><td>{props.member.age}</td></tr>);
}
function MemberTable({ members }) {
  return (
    <table align="center">
      <thead></thead>
      <tbody>
          {
        members.map((member, index) => 
        <TableItem key={index} member={member} />
        )
          }
      </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members} />
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
