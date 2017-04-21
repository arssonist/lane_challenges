<h1> React Photo Uploader </h1>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This version 1.0 of a photo uploader app built using React

About: 

This project attempts to execute the following-

- upload a single photo onto the page.
- perform various edits to the photo.
- record each of these edits in a history.
- be able to undo edits made.
- be able to preview an example of the photo with the edits applied.
- be able to reset the program to it’s starting point.

Due to the constraints of the assignment it was necessary to rely on npm. This project consists of two imported React packages, Dropzone, used to import the photo, and React-Avatar-Editor, used to edit the photo. 

It was necessary to use extensive commenting for the sake of keeping things functioning. 

The weakness of this app are going to be fixed in futre versions: 
- not using best practices re: component layout and handling of state. After the app was working, it was setup in such a way that made it too difficult to pull apart and recompile properly.
- reset button does not work to reset the photo. A page refresh is necessary to accomplish this. This is caused by the above problem.
- history records every single instance rather than just once for each, which would have made a much better UX. This is due to a scoping problem that I could not solve.
- Lastly, the React-Avatar-Editor does not perform edits to the photo that are of real world value and thus a different photo editor might be used in a future iteration of this app.



