export const content = {
    inputs: [
        {
            label: 'Full Name',
            name: 'fullname',
            type: 'text',
            placeholder: 'e.g. Jon Doe'
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        },
        {
            label: 'Project Name',
            name: 'projectname',
            type: 'text',
            placeholder: 'Name of your project'
        },
        {
            label: 'User Type',
            name: 'type',
            type: 'text',
            placeholder: 'Types: Owner or Developer'
        },

    ],
    otherInputs: [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Email'
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Password'
        },
        {
            label: 'Project Name',
            name: 'text',
            type: 'text',
            placeholder: 'Name of your project'
        },
    ],

    userType: [
        {
            id: 1,
            type: 'Developer'
        },
        {
            id: 2,
            type: 'Owner'
        }
    ]
}

export default content;

