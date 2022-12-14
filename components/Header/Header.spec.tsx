import React from 'react'
import { render } from "@testing-library/react";
import { Header } from '.';
import { useSession } from "next-auth/react";

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

jest.mock('next-auth/react', () => {
    return {
        useSession() {
            return {
                data: null,
                status: 'loading'
            }
        }
    }
})

// test('renderizar componente Header', () => {
//     const { debug } = render(<Header />)
//     debug()
//     // expect(getByText('Home')).toBeInTheDocument()
//     // expect(getByText('Notícias')).toBeInTheDocument()
// })
