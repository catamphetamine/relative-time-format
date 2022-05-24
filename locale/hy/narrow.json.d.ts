import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hy';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;