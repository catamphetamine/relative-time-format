import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-AO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;