"use client";

import Typography from "@mui/joy/Typography";
import SectionLayout from "../_components/sectionLayout";
import ScrollAnimation from "react-animate-on-scroll";
import LocationOn from "@mui/icons-material/LocationOn";
import Link from "@mui/joy/Link";
import { scroller } from "react-scroll";
import content from "../../content";

const { location, description } = content.homepage.about;

const About = () => {
    return (
        <SectionLayout name="about">
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography level="h1">About me</Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography
                    level="body-sm"
                    startDecorator={<LocationOn fontSize="small" />}
                    sx={{ ml: -1, mb: 2 }}
                >
                    {location}
                </Typography>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce>
                <Typography>{description}</Typography>
            </ScrollAnimation>
            <Link
                role="menuitem"
                component="a"
                onClick={() =>
                    scroller.scrollTo("skills", {
                        duration: 1000,
                        smooth: true,
                    })
                }
                sx={{ mt: 2 }}
            >
                Check out my Skills...
            </Link>
        </SectionLayout>
    );
};

export default About;
