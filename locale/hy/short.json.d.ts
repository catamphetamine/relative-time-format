import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hy';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;