import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-TL';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;