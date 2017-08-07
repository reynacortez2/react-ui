import React, { Component } from 'react';
import { Container } from '../container/Container';

export class FieldGroup extends Component
{
    render()
    {
        let classes = ['group'];
        let props = Object.assign({}, this.props);

        if(this.props.className)
            classes.push(this.props.className);

        props.className = classes.join(' ');

        return (
            <Container {...props}>
                {this.props.children}
            </Container>
        );
    }
}
