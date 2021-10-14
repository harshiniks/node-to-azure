import React from 'react';

class App extends React.Component {
  render() {
    return (
    <div className="main-container">
        <div className="cloud-image" style={{textAlign:'center'}}>
            <img alt="" src="img/icon-student_developer_pack.png" />
            <img alt="" style={{height:'210px',width:'200px'}} src="img/arrow.png" />
            <img style={{height:'210px',width:'230px'}} src="img/azurelogo.png" />
        </div>
        <div className="content">
            <div className="tweet-container">
        </div>
            <div className="content-body">
                <div className="success-text">Github Hackathon!</div>
                <div className="description line-1"> Congratulations on choosing awesome github education packs</div>
                <div className="description line-2"> Your <b>REACT APP</b> is up and running on Azure</div>
                <div className="next-steps-container">
                    <div className="next-steps-header">Next up</div>
                    <div className="next-steps-body">
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/cloneWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository">Clone your code repository and start developing your application on IDE of your choice</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/deployWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://help.github.com/en/actions">View your workflow on GitHub and customize it as per your needs</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/stackWhite.svg" />
                            </div>
                            <div className="step-text"><a href="http://portal.azure.com">View your service stack in the Azure Portal</a></div>
                        </div>
                        <div className="step">
                            <div className="step-icon">
                                <img src="img/lightbulbWhite.svg" />
                            </div>
                            <div className="step-text"><a href="https://go.microsoft.com/fwlink/?linkid=862126">Learn more about all you can do with GitHub workflow by visiting the documentation</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;