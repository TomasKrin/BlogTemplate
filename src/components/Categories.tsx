import { Autocomplete, TextField } from "@mui/material";
import { generatePath, useNavigate } from "react-router-dom";

import { SPORTS_PATH } from "../routes/consts";
import { useState } from "react";

const categories = ["Technologies", "Games", "Sports"];

const Categories = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string | null>("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Autocomplete
        value={value}
        size="small"
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
          value === "Sports" && navigate(SPORTS_PATH);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={categories}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Categories" />}
      />
    </div>
  );
};

export default Categories;
