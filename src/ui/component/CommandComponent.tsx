import {useAsyncRequest} from "../../util/useAsyncRequest";
import {getProjects} from "../../api/ProjectApi";
import {useEffect} from "react";
import {UserModel} from "../../api/models";
import {Alert, Button, ButtonGroup, Placeholder, Table} from "rsuite";
import {activateUser, getUserGroup} from "../../api/UserApi";

const { Column, HeaderCell, Cell, Pagination } = Table;
const {Paragraph} = Placeholder

export const CommandComponent = () => {

    const [pendingGroup, errorGroup, dataGroup, refreshFnGroup] = useAsyncRequest(async () => {
        return getUserGroup();
    }, undefined, undefined);

    useEffect(() => {
        refreshFnGroup();
    }, []);

    if(pendingGroup){
        return <Paragraph/>
    }

    const commandNormilized = dataGroup as Array<UserModel>

    return(
        <Table
        data={commandNormilized}>
            <Column width={200} align="center" fixed>
                <HeaderCell>ФИО</HeaderCell>
                <Cell dataKey="fullName" />
            </Column>
            <Column width={70} align="center" fixed>
                <HeaderCell>Логин</HeaderCell>
                <Cell dataKey="login" />
            </Column>
            <Column width={70} align="center" fixed>
                <HeaderCell></HeaderCell>
                <Cell dataKey="login" />
            </Column>
            <Column width={400} fixed="right">
                <HeaderCell>Состояние</HeaderCell>
                <Cell>
                    {
                        // @ts-ignore
                        rowData => {
                        return (
                            rowData.isActive == "1"?<span style={{color:"black"}}>Активен</span>
                                :<Button size={"xs"} onClick={()=>{
                                    activateUser(rowData.id).then(
                                        ()=>{
                                            Alert.success("Пользователь активирован!",1000)
                                            refreshFnGroup();
                                        }
                                    ).catch(()=>{
                                        Alert.error("Что-то пошло не так...",1000)
                                    })
                                }} color={"green"} appearance={"primary"}>Активировать</Button>
                        );
                    }}
                </Cell>
            </Column>
        </Table>
    )
}