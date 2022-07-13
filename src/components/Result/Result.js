import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getResult } from "../../redux/AsyncAction/ResultAction";
import "./Result.css";
const Result = () => {
  const [state, setstate] = useState({
    term: "",
  });
  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const Studentinfo=useSelector((state)=>state.student.student)
  const StudentID=JSON.stringify(Studentinfo._id)
  const student=JSON.parse(StudentID);

  const resultInfo=useSelector((state)=>state.result);
  const result=Object.values(resultInfo)
  console.log("result",result);

  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const data = { ...state ,student};
    console.log(data);
    dispatch(getResult(data))
  };
  return (
    <div>
      <form onSubmit={submit}>
        <select value={state.term} name="term" onChange={handleInputs} id="_id">
          <option value="">Please choose Term</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <input
          className="loderesultbutton"
          type="submit"
          value="Submit"
        ></input>
      </form>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Subject Name</th>
            <th>Section</th>
            <th>Gpa</th>
          </tr>
        </thead>
        <tbody>
          {
          result.length>0?(
            result.map((item,index)=>(
              item.result.map((data,index)=>(
                <tr>
                <td>{data.subject.claasName}</td>
                <td>{data.subject.name}</td>
                <td>{data.subject.sec}</td>
                <td>{data.gpa}</td>
              </tr>
              ))
     
            ))
        
          ):<h2>Result not Published</h2>
          }
         
          
        </tbody>
      </Table>
    </div>
  );
};

export default Result;
