import React, { Component } from 'react';

export class DateField extends Component
{
    constructor(props)
    {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(event)
    {
        let target = event.target;

        if(this.props.onChange)
            this.props.onChange(this.props, target.value);
    }

    render()
    {
        return <input type="date" {...this.props} onChange={this.onChange} />;
    }
}