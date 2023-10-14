import { HeaderBlock, Forma, FormButton, FormInput } from './Searchbar.styled'

export const Searchbar = ({ toSubmit }) => {
    return (<HeaderBlock>
        <Forma onSubmit={values => { console.log(values) }}>
            <FormButton type="submit">
                <span>Search</span>
            </FormButton>

            <FormInput
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </Forma>
    </HeaderBlock>)
}