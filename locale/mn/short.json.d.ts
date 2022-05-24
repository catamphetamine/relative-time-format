import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;