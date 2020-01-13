import React, { Component } from 'react'
import UserInfo from './UserInfo'
import StoryInfo from './StoryInfo'
import Tools from './Tools'
import Layers from './Layers'
import TestComponent from './TestComponent'


class SidebarMain extends Component {
    render() {
        return (
            <div>
                sidrbar main
                <UserInfo></UserInfo>
                <StoryInfo></StoryInfo>
                <Tools></Tools>
                <Layers></Layers>
                <TestComponent></TestComponent>
            </div>
        )
    }
}

export default SidebarMain
