import React, {PureComponent} from 'react' 
import ProfileCard from '../../components/CardDes'
import StarDashbord from '../../components/DashbordStar'
import TabIcon from './components/TabIcon'
const style = { 
    layoutPage: {display: "flex",justifyContent: "space-between",marginBottom: 10,},
}
export default class Index extends PureComponent {
     render() {
          return( 
            <div>
            <div style={style.layoutPage}>
                <ProfileCard />
                <StarDashbord />
            </div>
            <TabIcon />
            </div>
          )
     }
}