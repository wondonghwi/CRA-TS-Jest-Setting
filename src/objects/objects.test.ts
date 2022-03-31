import {getUser} from "./objects";

test('objects' , () => {
    expect(getUser(1, 'kim')).toEqual({
        id : 1,
        name : 'kim'
    })
})