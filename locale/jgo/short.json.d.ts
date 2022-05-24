import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'jgo';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;