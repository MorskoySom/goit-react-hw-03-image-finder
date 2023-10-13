import { HeaderBlock, Forma, FormButton, FormInput } from './Searchbar.styled'

export const Searchbar = () => {
    return (<HeaderBlock>
        <Forma>
            <FormButton type="submit">
                <span class="button-label">Search</span>
            </FormButton>

            <FormInput
                class="input"
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
            />
        </Forma>
    </HeaderBlock>)
}