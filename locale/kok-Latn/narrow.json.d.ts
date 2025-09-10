import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kok-Latn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;