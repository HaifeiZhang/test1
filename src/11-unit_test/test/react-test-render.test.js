import ShallowRender from 'react-test-renderer/shallow'
import App from '../App'


describe("react-test-render",function(){
    it("app name",function(){
        const render = new ShallowRender()
        render.render(<App/>)
        console.log(render.getRenderOutpu().this.props)
    })
})


//用 npm test开始测试