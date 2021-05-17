import * as React from "react";
import { Card, CardContent } from '@material-ui/core';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Welcome to the test project" />
        <CardContent>A Small React SPA implementation for code review </CardContent>
    </Card>
);
