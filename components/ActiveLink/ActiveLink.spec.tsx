import React from 'react'
import { render } from "@testing-library/react";
import { ActiveLink } from '.';

jest.mock('next/router', () => {
    return {
        useRouter(){
            return {
                asPath:'/'
            }
        }
    }
})

test('renderizar componente ActiveLink', () => {
    const {getByText} = render(
        <ActiveLink href='/' activeClassName='active'>
            <a>Home</a>
        </ActiveLink>
    )
    expect(getByText('Home')).toBeInTheDocument() 
})

test('Componente ActiveLink recebe a classe active', () => {
    const {getByText} = render(
        <ActiveLink href='/' activeClassName='active'>
            <a>Home</a>
        </ActiveLink>
    )
    expect(getByText('Home')).toHaveClass('active')
})