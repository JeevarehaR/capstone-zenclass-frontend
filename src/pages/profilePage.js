import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Item } from "../components/ContentBox";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Profile() {
  //formik logics
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      qual: "",
      yearsofexp: "",
      yearofpass: "",
      git: "",
      portf: "",
      res: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(50, "Name must not exceed 50 char!")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid address")
        .required("Email is Required"),
      phone: Yup.number().min(10).required("Phone is Required"),
      qual: Yup.string().min(10).required("Qualification is Required"),
      yearofpass: Yup.number().min(4).required("Year is Required"),
      yearsofexp: Yup.number().min(1).required("Year is Required"),
      git: Yup.string().required(),
      portf: Yup.string().required(),
      res: Yup.string().required(),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid>
      <Item sx={{ width: "900px", margin: "24px auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignContent: "center",
            marginTop: "5%",
          }}
        >
          <form className="form-div" onSubmit={formik.handleSubmit}>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="name">
                {formik.touched.name && formik.errors.name ? (
                  <span style={{ color: "red" }}>{formik.errors.name} </span>
                ) : (
                  "Name"
                )}
              </label>
              <input
                type="text"
                placeholder="Your Name!"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="phone">
                {formik.touched.phone && formik.errors.phone ? (
                  <span style={{ color: "red" }}>{formik.errors.phone} </span>
                ) : (
                  "Phone"
                )}
              </label>
              <input
                type="text"
                placeholder="Enter 10 digits"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="email">
                {formik.touched.email && formik.errors.email ? (
                  <span style={{ color: "red" }}>{formik.errors.email} </span>
                ) : (
                  "Email"
                )}
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="qualifications">
                {formik.touched.qual && formik.errors.qual ? (
                  <span style={{ color: "red" }}>{formik.errors.qual} </span>
                ) : (
                  "Qualifications"
                )}
              </label>
              <input
                type="text"
                placeholder="Example: B.Tech Information Technology"
                name="qualifications"
                value={formik.values.qual}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="yearofpassing">Year of Passing</label>
              <input
                type="text"
                placeholder="Example: 2020"
                name="yearofpassing"
                value={formik.values.yearofpass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="yearsofexp">Years of Experience</label>
              <input
                type="text"
                placeholder="Example: 2"
                name="yearsofexp"
                value={formik.values.yearsofexp}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="githuburl">Github URL</label>
              <input
                type="text"
                placeholder="Example: github.com/profile-name"
                name="githuburl"
                value={formik.values.git}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="portfoliourl">Portfolio URL</label>
              <input
                type="text"
                placeholder="Example: yourSite.com"
                name="portfoliourl"
                value={formik.values.portf}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <label htmlFor="resumeurl">Resume URL</label>
              <input
                type="text"
                placeholder=""
                name="resumeurl"
                value={formik.values.res}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <br />
            <div style={{ textAlign: "right" }}>
              <Button variant="contained">Save</Button>
            </div>
          </form>
        </div>
      </Item>
    </Grid>
  );
}
