import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'xnr';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;