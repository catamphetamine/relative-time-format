import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-TL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;