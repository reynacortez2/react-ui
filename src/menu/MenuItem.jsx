import React, { Component } from 'react';

export class MenuItem extends Component
{
    render()
    {
        let classes = ['item']

        if(this.props.active)
            classes.push('active');

        if(this.props.expanded)
            classes.push('expanded');

        if(this.props.className)
            classes.push(this.props.className);

        return <li id={this.props.id} className={classes.join(' ')}>{this.props.children}</li>;
    }
}
