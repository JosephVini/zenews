import React from 'react'
import { render } from "@testing-library/react";
import { SignInButton } from '.';
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

test('renderizar componente SignInButton', () => {
    const { debug } = render(
        <SignInButton />
    )
    debug()
})

test('Renderizar o butão com a frase não esta autenticado', () => {
    const { getByText } = render(
        <SignInButton />
    )
    expect(getByText('Entrar com Google')).toBeInTheDocument() 
})