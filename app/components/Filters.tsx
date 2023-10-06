import { columnFilters } from "@/types";
import { Box, Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {BiSearchAlt} from "react-icons/bi"
type FiltersProp = {
    columnFilters: {id:string, value: string}[]
    setColumnFilters: any;
}
 
export default function Filters({columnFilters, setColumnFilters}: FiltersProp) {
    const taskName = columnFilters.find((f)=> f.id === "project")?.value || ""

    const handleChange =(id: string, value:string) => setColumnFilters(
        (prev: columnFilters[]) => prev.filter(f=> f.id !== id).concat(
            {id,value}
        )
    )
  return (
    <Box marginBottom={5}>
        <InputGroup size="sm" maxW="12rem">
            <InputLeftElement pointerEvents="none">
                <BiSearchAlt />
            </InputLeftElement>
            <Input type="text" variant="filled" placeholder="Project name" borderRadius={5} value={taskName} onChange={(e)=> handleChange("project",e.target.value)}  />
        </InputGroup>
    </Box>
  )
}
