import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'fi';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;