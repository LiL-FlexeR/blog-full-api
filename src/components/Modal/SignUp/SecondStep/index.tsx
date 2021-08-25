import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { IStepper } from "../../../../types/forms";
import { useStyles } from "../styled";

const SecondStep = ({ props, index, setIndex }: IStepper) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        name="profession"
        placeholder="Enter Profession"
        onChange={props.handleChange}
        value={props.values.profession}
        variant="outlined"
      />
      <TextField
        name="skills"
        placeholder="Enter Skills"
        onChange={props.handleChange}
        value={props.values.skills}
        variant="outlined"
      />
      <TextField
        name="details"
        placeholder="Enter Details"
        onChange={props.handleChange}
        value={props.values.details}
        variant="outlined"
      />
      <Box>
        <Button onClick={() => setIndex(index - 1)}>Back</Button>
        <Button onClick={() => setIndex(index + 1)} className={classes.button}>
          Next
        </Button>
      </Box>
    </div>
  );
};

export default SecondStep;
