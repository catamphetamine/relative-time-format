import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kok-Latn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;