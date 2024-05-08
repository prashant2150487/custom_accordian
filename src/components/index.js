import { Box, IconButton, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import data from "./data"
import { useState } from "react";
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId===selected ? null : getCurrentId);
        console.log(getCurrentId)
    }
    return (
        <div>
            <Box>
                {
                    data.map((item, index) => (
                        <Box>
                            <Stack key={index} onClick={() => handleSingleSelection(item.id)} direction='row' sx={{ backgroundColor: '#f2f2f2', m: 1, justifyContent: 'space-between', maxWidth: 400, alignItems: 'center', px: 1 }}>
                                <Typography>
                                    {item.title}
                                </Typography>
                                <IconButton>
                                    <AddIcon />
                                </IconButton>
                            </Stack>
                            {selected === item.id ? <div>{item.content}</div> : null}

                        </Box>
                    ))
                        
                      
                }


            </Box>
        </div>
    )
}