import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hy';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;