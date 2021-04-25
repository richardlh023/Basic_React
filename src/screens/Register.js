import React, { useEffect } from 'react'
import NoAuth from '../layout/NoAuth'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


// const AlertLogin = (props) => {

//     useEffect(() => {
//         console.log('mounting');
//         return () => {
//             console.log('unmounting');
//         }
//     }, [])

//     if (props.isLogin) {
//         return (<Alert variant='success'>
//             Login Success
//         </Alert>)
//     }

//     // const a;

//     // a === null
//     // null => false
//     // undefined

//     // a !== null & a !== undefind
//     // 0 => false
//     // '' => false
//     // false => false

//     // a มีค่าข้างในตัวแปรที่ไม่ใช่ null,0,'',false


//     if (!props.isLogin && props.error) {
//         return (<Alert variant='danger'>
//             {props.error}
//         </Alert>)
//     }

//     return (<></>)
// }
// let anonyUseEffect

// Login()
// const unmount = anonyUseEffect()

// if(unmount === function) ? unmount() : null

function Register() {
    const { register, handleSubmit,  formState: { errors } } = useForm()
    //const { register, handleSubmit, reset, formState: { errors } } = useForm()

    // const [checkLogin, setCheckLogin] = useState({
    //     isSuccess: false,
    //     error: '',
    // })

    console.log(errors)

    const onSubmit = (data) => {
        // if (data.email === login.email && login.password === data.password) {
        //     setCheckLogin({ isSuccess: true, error: '' })
        // } else {
        //     setCheckLogin({ isSuccess: false, error: 'Login Fail.' })
        // }
        // reset()

        console.log(data)
    }


    // console.log('set props & set state');

    useEffect(() => {
        // console.log('useEffect');
        return () => {

        }
    }, [])

    // console.log('render');

    return (
        <NoAuth>
            <Form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    textAlign: 'left',
                }}
            >
                <h1 className="h3 mb-3 fw-normal" style={{ textAlign: 'center' }}>Please sign in</h1>
                {/** เช็คเงื่อนไข การแสดงผล */}
                {/* <AlertLogin isLogin={checkLogin.isSuccess} error={checkLogin.error} /> */}


                <div className="form-floating">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        {...register('email', {
                            required: true,
                        })}
                        type='text'
                        placeholder='name@example.com'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ username</p>}
                </div>
                <div className="form-floating">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register('password', {
                            required: true,
                        })}
                        type='password'
                        placeholder='Password'
                    />
                    {errors?.password?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ password</p>}
                </div>

                <div className="form-floating">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control
                        {...register('firstname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='firstname'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ ชื่อ</p>}
                </div>

                <div className="form-floating">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control
                        {...register('lastname', {
                            required: true,
                        })}
                        type='text'
                        placeholder='lastname'
                    />
                    {errors?.email?.type === 'required' && <p style={{ color: 'red' }}>กรุณาระบุ นามสกุล</p>}
                    <br></br>
                </div>

                

                <Button type='submit' variant='primary' block>Register</Button>
                <p className="mt-5 mb-3 text-muted" style={{ textAlign: 'center' }}>© 2017–2021</p>
            </Form>
        </NoAuth>
    )
}

export default Register
