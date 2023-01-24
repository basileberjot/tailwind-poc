import { ButtonUnstyled } from "@mui/base";
import { Autocomplete, Button, TextField, TextFieldProps } from "@mui/material";
import { MultipleSelect } from "@zeals-co-ltd/washi-components";
import { useState } from "react";
import { User } from "../App";
import UsersSection from "../organisms/UsersSection";
import "../TestComponent.css";

interface Props {
  users: User[];
}

const UsersPage = ({ users }: Props) => {
  const [values, setValues] = useState([]);
  const onChange = (e: any) => {
    const { value: targetValue } = e.target;
    setValues(
      // On autofill we get a stringified value.
      typeof targetValue === "string" ? targetValue.split(",") : targetValue
    );
  };
  const onClear = () => {
    setValues([]);
  };

  const options = users.map((user, i) => ({ label: user.name, id: i + 1 }));
  const multipleSelectOptions = users.map((user, i) => ({
    name: user.name,
    value: String(i + 1),
  }));

  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold pl-10 pt-8">Users list</h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2 p-5 bg-gray-300 rounded">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => (
              <TextField {...params} label="Styled with Tailwind" />
            )}
            className="bg-white"
            slotProps={{
              paper: {
                className: "border-solid border-2 border-sky-500 text-red-500",
              },
              popper: {
                className: "border-solid border-2 border-sky-500",
              },
              clearIndicator: {
                className: "bg-black",
              },
            }}
          />
          <Button className="bg-black" color="primary">
            MUI Button vanilla CSS (Tailwind overrided)
          </Button>

          <MultipleSelect
            value={values}
            onChange={onChange}
            hasCheckboxes
            onClear={onClear}
            preValueText={"Selected user:"}
            defaultValue={{ name: "Unselected", value: "0" } as any}
            limitTags={1}
            options={multipleSelectOptions}
          />

          <ButtonUnstyled
            slotProps={{
              root: {
                className:
                  "bg-black text-white border-solid border-2 border-sky-500",
              },
            }}
          >
            MUI Base button styled with Tailwind
          </ButtonUnstyled>
        </div>

        <UsersSection users={users} />
      </div>
    </>
  );
};

export default UsersPage;
