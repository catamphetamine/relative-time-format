import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kok-Latn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;