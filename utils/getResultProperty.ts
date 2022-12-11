export const getResultTextProperty = (result: any, property: string) => {
    return result.properties[property].rich_text[0].plain_text;
}

export const getResultEmailProperty = (result: any) => {
    return result.properties.Email.title[0].plain_text;
}

export const getCheckboxProperty = (result: any, property: string) => {
  return result.properties[property].checkbox;
}