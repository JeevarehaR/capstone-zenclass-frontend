import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Form from "react-bootstrap/Form";
import { Link } from "@mui/material";
import data from "../assets/data.json";
import { useState, useEffect } from "react";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export function ContentBox() {
  const [day, setDay] = useState(0);
  const dt = data[day];

  useEffect(() => {}, [day]);

  return (
    <Box sx={{ flexGrow: 1, margin: "100px 0px" }}>
      <Grid container spacing={5}>
        <Grid sm={9} md={6} lg={8} sx={{ minWidth: "380px" }}>
          <Grid>
            <Item
              sx={{
                padding: 3,
                background: "#4b0dba",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h4>Please watch the video!</h4>
              <Link
                href={dt.video}
                sx={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener"
              >
                <Button
                  variant="contained"
                  size="large"
                  style={{
                    backgroundColor: "#2ed16c",
                    borderRadius: "10px",
                    fontSize: "18px",
                    textTransform: "lowercase",
                  }}
                >
                  Play video
                </Button>
              </Link>
            </Item>
          </Grid>
          <Grid>
            <Item sx={{ textAlign: "left", borderRadius: "10px", padding: 3 }}>
              <h4
                style={{
                  color: "#555A8F",
                  fontSize: "24px",
                  fontWeight: "500",
                  padding: 3,
                }}
              >
                {dt.heading}
              </h4>

              <hr />

              <h5 style={{ color: "black" }}>Contents</h5>

              <div class="content" style={{ margin: "0 40px" }}>
                {dt.content}
              </div>
            </Item>
          </Grid>
          <br />
          <Grid>
            <h4
              style={{
                color: "#4b0dba",
                textAlign: "left",
                padding: 5,
                margin: 5,
                fontWeight: "500",
              }}
            >
              Activities
            </h4>

            <Accordion
              sx={{
                borderRadius: "10px",
                boxShadow: "0 1px 10px rgb(0 0 0 / 10%)",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{dt.task}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ padding: "0 70px" }}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Deployed url</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                    <Button
                      variant="contained"
                      type="submit"
                      style={{
                        backgroundColor: "#4c0dba",
                        float: "right",
                        marginTop: "10px",
                        marginBottom: "30px",
                        borderRadius: "7px",
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>

        <Grid
          sm={3}
          md={6}
          lg={3}
          className="roadmap-area"
          sx={{ marginTop: 3 }}
        >
          <Item>
            <h4
              style={{
                textAlign: "left",
                padding: "15px",
                color: "#555A8F",
                fontWeight: "500",
                background: "#f7f5fc",
                margin: 0,
                boxShadow: "0 1px 10px rgb(0 0 0 / 10%)",
              }}
            >
              Sessions Roadmap
            </h4>

            <div className="sessions-container">
              <div className="session-roadmap" onClick={() => setDay(0)}>
                <h6>1</h6>
                <div
                  className="step_path_right"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>

              <div className="session-roadmap" onClick={() => setDay(1)}>
                <h6>2</h6>
                <div
                  className="step_path_right"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>

              <div className="session-roadmap" onClick={() => setDay(2)}>
                <h6>3</h6>
                <div
                  className="step_path_right"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(3)}>
                <h6>4</h6>
                <div
                  className="step_path_right"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(4)}>
                <h6>5</h6>
                <div
                  className="step_path_bottom"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(9)}>
                <h6>10</h6>
              </div>
              <div className="session-roadmap" onClick={() => setDay(8)}>
                <h6>9</h6>
                <div
                  className="step_path_left"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(7)}>
                <h6>8</h6>
                <div
                  className="step_path_left"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(6)}>
                <h6>7</h6>
                <div
                  className="step_path_left"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
              <div className="session-roadmap" onClick={() => setDay(5)}>
                <h6>6</h6>
                <div
                  className="step_path_left"
                  style={{ pointerEvents: "none" }}
                ></div>
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
