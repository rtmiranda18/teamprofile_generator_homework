# Team Profile Generator

## Site Picture
![Site](tpg.png)

## Technologies Used
- Javascript - adds special effects on pages
- Node.js - an open source server environment that uses JavaScript on the server
- GitBash - for cloning repository and pushing code to GitHub
- GitHub - holds repository that deploys to GitHub Pages

## Summary
This file contains a generated index.html  for the Team Profile. It also contains code that was created using Javascript and Node.js. 

## Code Snippet
```javascript
const generateManager = (manager) => {
    return `
        <div class="box">
            <div class="employee">
                <div class="topBlue">
                    <div class="name">${manager.name}</div>
                    <div class="jobTitle">Manager <img src="svgs/manager.svg" alt="Manager" /></div>
                </div>
                <div class="bottomGray">
                    <ul>
                        <li>
                            <strong>ID:</strong>&nbsp;
                            <div class="idnumber">${manager.employee_id}</div>
                        </li>
                        <li>
                            <strong>Email:</strong>
                            <a href="mailto:${manager.email}" class="email">${manager.email}</a>
                        </li>
                        <li>
                            <strong>Office Number:</strong>
                            <p>${manager.office_number}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}
```

```javascript
<javascript>

</javascript>
```
## Video Link
https://drive.google.com/file/d/1Ho3u5N1xEJnzehEoWAAgxLC8lxTKiqLi/view

## Author Links 
[LinkedIn](https://www.linkedin.com/in/rosario-miranda-b81170132/)<br />
[GitHub](https://github.com/rtmiranda18)
