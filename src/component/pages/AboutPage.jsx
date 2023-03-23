import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import pkg from "../../../package.json";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About this project</h1>
                <p>
                    This is a React app to leave feedback for a product or
                    service.
                </p>
                <p>Version : {pkg.version}</p>
                <Link to="/">Back to home</Link>
            </div>
        </Card>
    );
}

export default AboutPage;
