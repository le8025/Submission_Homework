import Header from "./Header";

function Home(){
    return(
        <div className="component_margins">
            <h3>Supergiant Games Official Blog</h3>
            <iframe title="SG_blog" src="https://www.supergiantgames.com/blog/" height="20%" width="50%"></iframe>   
            <h4>Featured Content: Rewards for each Legendary Fish </h4>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Biome</th>
                    <th>Reward</th>
                </tr>
                <tr>
                    <td>Scyllascion</td>
                    <td>Tatarus</td>
                    <td>30 Gems</td>
                </tr>
                <tr>
                    <td>Flameater</td>
                    <td>Asphodel</td>
                    <td>5 Cthonic Keys</td>
                </tr>
                <tr>
                    <td>Seamare</td>
                    <td>Elyisum</td>
                    <td>3 Nectar</td>
                </tr>
                <tr>
                    <td>Stonewhal</td>
                    <td>Temple of Styx</td>
                    <td>150 Gems</td>
                </tr>
                <tr>
                    <td>Voidskate</td>
                    <td>Chaos</td>
                    <td>500 Darkness</td>
                </tr>
                <tr>
                    <td>Sturgeon</td>
                    <td>Greece</td>
                    <td>1 Titan Blood</td>
                </tr>
            </table>             
        </div>
    )
}

export default Home;