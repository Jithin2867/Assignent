import React from 'react';
import axios from 'axios';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      id:0,
      name:'',
      DOB:'',
      class:'',
      Division:'',
      Gender:''
    }
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        users:res.data,
        id:0,
        name:'',
        DOB:'',
        class:'',
        Division:'',
        Gender:''
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        name:this.state.name,
        DOB:this.state.DOB,
        class:this.state.class,
        Division:this.state.Division,
        Gender:this.state.Gender
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        name:this.state.name,
        DOB:this.state.DOB,
        class:this.state.class,
        Division:this.state.Division,
        Gender:this.state.Gender
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,
        DOB:res.data.DOB,
        class:res.data.class,
        Division:res.data.Division,
        Gender:res.data.Genderd
      });
    }) 
  }
  render(){
    return (
      <div className="container">
         <div className="row">
         <div className="col s6">
                 <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">person</i>
                    <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter Name</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">mail</i>
                    <input value={this.state.DOB} onChange={(e)=>this.setState({DOB:e.target.value})} type="date" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Date of Birth</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                      <select className="autocomplete" id="autocomplete-input">
                               <option value={this.state.class}>I</option>
                               <option value={this.state.class}>II</option>
                               <option value={this.state.class}>III</option>
                               <option value={this.state.class}>IV</option>
                               <option value={this.state.class}>V</option>
                               <option value={this.state.class}>VI</option>
                               <option value={this.state.class}>VII</option>
                               <option value={this.state.class}>VIII</option>
                               <option value={this.state.class}>IX</option>
                               <option value={this.state.class}>X</option>
                               <option value={this.state.class}>XI</option>
                               <option value={this.state.class}>XII</option> 
                        </select>
                      <label htmlFor="autocomplete-input"> Class </label>
                 </div>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">vpn_key</i>
                      <select className="autocomplete" id="autocomplete-input">
                               <option value={this.state.Division}>A</option>
                               <option value={this.state.Division}>B</option>
                               <option value={this.state.Division}>C</option>
                               
                        </select>
                      <label htmlFor="autocomplete-input">Division </label>
                 </div>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">mail</i>
                   <fieldset className="autocomplete" value={this.state.Gender} onChange={(e)=>this.setState({Gender:e.target.value})}>
                               <label for="Male"><input type="radio" className="autocomplete" value={this.state.Gender} id="autocomplete-input" />Male</label>
                               <label for="Female"><input type="radio" className="autocomplete" value={this.state.Gender} id="autocomplete-input" />Female</label>
                               <label for="Other"><input type="radio" className="autocomplete" value={this.state.Gender} id="autocomplete-input" />Other</label>
    
                   </fieldset>
                    <label htmlFor="autocomplete-input">Gender</label>
                  </div>










                  <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                 </form>
          </div>          
          <div className="col s6">
          <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Class</th>
              <th>Division</th>
              <th>Gender</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.users.map(user =>
                  <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.DOB}</td>
                      <td>{user.class}</td>
                      <td>{user.Division}</td>
                      <td>{user.Gender}</td>
                      <td>
                        <button onClick={(e)=>this.edit(user.id)} className="btn waves-effect waves-light" type="submit" name="action">
                          <i className="material-icons ">edit</i>
                        </button>       
                      </td>
                      <td>
                        <button onClick={(e)=>this.delete(user.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }
         

        </tbody>
      </table>
          </div>                
          </div>              
      </div>
    );
  }
}


export default App;
