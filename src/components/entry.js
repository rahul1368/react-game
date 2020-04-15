import React,{Component,useState} from "react";
import { HEADER_TEXT } from "./game.constants";
import styled from "styled-components";
const H1 = styled.h1`
    color:red;
    padding:50px;
`;
const H3 = styled.h3``;
const Div = styled.div``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input``;
const Button = styled.button``;

export default class Sudoku extends Component{
    constructor(props){
        super(props);
        this.state={
            rowCount:5,
            columnCount:5,
        }
    }
    inputChangeHandler = ({target}) => {  
        let {name,value} = target;
        this.setState({[name]:value});

    }
    render(){
        return(
            <>
                <Header headerTxt={HEADER_TEXT} />
                <Body 
                    inputChangeHandler={this.inputChangeHandler}
                    rowCount={this.state.rowCount || ""}
                    columnCount={this.state.columnCount || ""}
                />
            </>
        )
    }
}


const Header = props=>{
    return(
        <H1>{props.headerTxt}</H1>
    )
}
const Body = props => {
    const [isrenderSudoku,setIsrenderSudoku] = useState(false);

    return(
        <>
            <H3>Provide sudoku preferences</H3>
            <Form>
                <Div>
                    <Label>Row Size</Label>
                    <Input type="text" name="rowCount" onChange={props.inputChangeHandler} value={props.rowCount} />
                </Div>
                <Div>
                    <Label>Column Size</Label>
                    <Input type="text" name="columnCount" onChange={props.inputChangeHandler} value={props.columnCount} />
                </Div>
                <Div>
                    <Button type="button" name="columnCount" onClick={() => setIsrenderSudoku(true)}>Render Sudoku</Button>
                </Div>
            </Form>
            {
                isrenderSudoku && <RenderSudoku rowCount={props.rowCount} columnCount={props.columnCount} />
            } 
        </>       
    )
}
const CellInput = styled.input`
    width:30px;
    height:30px;
`;
const Table = styled.table`border:2px solid red;`;
const TBody = styled.tbody`border:2px solid black;`;
const TR = styled.tr``;
const TD = styled.td``;

const RenderSudoku = props => {
    const sudokuGenerateor = () => {
        let sudokuList = []
        for(let i =0;i<props.rowCount;i++){
            let trList = [] ;
            for(let j=0;j<props.columnCount;j++){
                const tdGenerator = (index) => (<TD key={index}><CellInput key={index} type="text" max="10" /></TD>);
                trList.push(tdGenerator);
            }
            sudokuList.push(trList)
        }
        return sudokuList
    }
    return(
        <>
            <Table>
                <TBody>
                    {
                        sudokuGenerateor().map((trObj,index)=>{
                            return(
                                <TR key={index}>
                                    {
                                        trObj.map((tdObj,index)=>(tdObj(index)))
                                    }
                                </TR>
                            )
                        })
                    }
                </TBody>
            </Table>
        </>
    )
}