class Validate {
  public isString = (content: unknown): content is string => {
    return typeof content === 'string';
  };

  public errorMessages = {
    email: 'Кажется, вы ошиблись в адресе 😱 Пожалуйста, перепроверьте еще раз!',
    login:
      'Требования к логину: от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)',
    name: 'Требования: латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
    phone: 'Требования: от 10 до 15 символов, состоит из цифр, может начинается с плюса',
    password: 'Требования: от 7 до 40 символов, обязательно хотя бы одна заглавная буква и цифра',
  };

  public email = (content: string): boolean => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(content);
  };

  public password = (content: string): boolean => {
    return /^(?=.*\d)(?=.*[A-Z])[^\s]{7,40}$/.test(content);
  };

  public phone = (content: string): boolean => {
    return /^\+?\d{10,15}$/.test(content);
  };

  public name = (content: string): boolean => {
    return /^[А-ЯЁA-Z][а-яёa-z]+(-[А-ЯЁA-Z][а-яёa-z]+)?$/.test(content);
  };

  public login = (content: string): boolean => {
    return !/^\d+$/.test(content) && /^[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}$/.test(content);
  };
}

export const validate = new Validate();
