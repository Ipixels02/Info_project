import {useAsyncRequest} from "../../util/useAsyncRequest";
import {getProjects} from "../../api/ProjectApi";
import {FC, useEffect, useState} from "react";
import {CareerEntity, UserEntity} from "../../api/models";
import {Alert, Breadcrumb, Button, ButtonGroup, Placeholder, Table} from "rsuite";
import {activateUser, getUserGroup} from "../../api/UserApi";

const {Column, HeaderCell, Cell, Pagination} = Table;
const {Paragraph} = Placeholder

interface CommandComponentInterface {
    currentUser: UserEntity
}

export const CommandComponent: FC<CommandComponentInterface> = ({currentUser}) => {

    const [viewUserId, setViewUserId] = useState(currentUser.id);
    const [breadCrumbInfo, setBreadCrumbInfo] = useState<Array<UserEntity>>([currentUser]);
    const [pendingGroup, errorGroup, dataGroup, refreshFnGroup] = useAsyncRequest(async () => {
        return getUserGroup(viewUserId);
    }, undefined, [viewUserId]);

    useEffect(() => {
        refreshFnGroup();
    }, []);

    if (pendingGroup) {
        return <Paragraph/>
    }

    const commandNormilized = dataGroup as UserEntity

    return (
        <>
            <div style={{paddingLeft: 20}}>
                <Breadcrumb style={{color: "#DEFFD6"}}>
                    {breadCrumbInfo.map(elem => {
                        return (
                            <Breadcrumb.Item>
                                <div onClick={() => {
                                    setViewUserId(elem.id);
                                    setBreadCrumbInfo(breadCrumbInfo.slice(0, breadCrumbInfo.indexOf(elem) + 1))
                                }}>
                                    {elem.lastName}
                                </div>
                            </Breadcrumb.Item>
                        )
                    })}
                </Breadcrumb>
                <Table style={{color: "#0d0d0d"}}
                       autoHeight={true}
                       sortColumn={"isActive"}
                       defaultSortType={"desc"}
                       onRowClick={(user) => {
                           breadCrumbInfo.push(user);
                           setBreadCrumbInfo(breadCrumbInfo);
                           setViewUserId(user.id);
                       }}
                       data={commandNormilized.command}>
                    <Column>
                        <HeaderCell style={{color: "#0d0d0d"}}>ФИО</HeaderCell>
                        <Cell>
                            {
                                // @ts-ignore
                                rowData => {
                                    return (
                                        <span style={{color: "#0d0d0d"}}>
                                            {
                                                rowData.firstName + " " + rowData.lastName.substring(0, 1) + "." + " " + rowData.middleName.substring(0, 1) + "."
                                            }
                                        </span>
                                    );
                                }}
                        </Cell>
                    </Column>
                    <Column width={200} align="left" fixed>
                        <HeaderCell style={{color: "#0d0d0d"}}>Количество пользователей</HeaderCell>
                        <Cell>
                            {
                                // @ts-ignore
                                rowData => {
                                    return (
                                        <span style={{color: "#0d0d0d"}}>
                                            {
                                                rowData.career.map((career: CareerEntity) => {
                                                    return career.careerCount
                                                }).reduce((accum: number, currentValue: number) => {
                                                    return accum + currentValue
                                                })
                                            }
                                        </span>
                                    );
                                }}
                        </Cell>
                    </Column>
                    <Column width={100} align="left" fixed>
                        <HeaderCell style={{color: "#0d0d0d"}}>Логин</HeaderCell>
                        <Cell dataKey="login"/>
                    </Column>
                </Table>
            </div>
        </>
    )
}